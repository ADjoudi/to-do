//import '../../css/project.css'
export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.categories = [];
  }

  addCategory(category) {
    this.categories.push(category);
  }
  getCategories() {
    return this.categories;
  }

  getProjectName() {
    return this.projectName;
  }
}
