/// <reference path="../components/base-components.ts"/>
namespace App {
    // ProjectList Class
    export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
        // templateElement: HTMLTemplateElement;
        // hostElement: HTMLDivElement;
        // element: HTMLElement;

        assignedProjects: Project[] = []

        constructor(private type: 'active' | 'finished') {
            super('project-list', 'app', false, `${type}-projects`)
            this.assignedProjects = []

            this.configure()
            this.renderContent()
        }

        @autoBind
        dragOverHandler(event: DragEvent) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault()
                const listEl = this.element.querySelector('ul')!;
                listEl.classList.add('droppable')
            }
        }

        @autoBind
        dropHandler(event: DragEvent) {
            const prjId = event.dataTransfer!.getData('text/plain');
            projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
        }

        @autoBind
        dragLeaveHandler(event: DragEvent) {
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.remove('droppable')
        }

        private renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement

            listEl.innerHTML = ''
            for (const item of this.assignedProjects) {
                // const listItem = document.createElement('li');
                // listItem.textContent = item.title;
                // listEl.appendChild(listItem)
                new ProjectItem(this.element.querySelector('ul')!.id, item)
            }

        }

        configure() {
            this.element.addEventListener("dragover", this.dragOverHandler)
            this.element.addEventListener("dragleave", this.dragLeaveHandler)
            this.element.addEventListener("drop", this.dropHandler)

            projectState.addListener((projects: Project[]) => {

                const releventProjects = projects.filter(prj => {
                        if (this.type == 'active') {
                            return prj.status === ProjectStatus.Active
                        }
                        return prj.status === ProjectStatus.Finished
                    }
                )

                this.assignedProjects = releventProjects
                this.renderProjects()
            })
        }


        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul')!.id = listId;
            this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
        }


    }

}