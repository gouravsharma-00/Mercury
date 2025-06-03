import { Gitlab } from "gitlab";

export default async function connect(token : string, id : number) {
    const api = new Gitlab({
        token
    })

    // retrive project
    try {
        const project = await api.Projects.show(id);
        console.log('Project name:', project.name);
        console.log('Visibility:', project.visibility);

    } catch (err) {
        
        console.error('Error fetching project:', err);
    }
}