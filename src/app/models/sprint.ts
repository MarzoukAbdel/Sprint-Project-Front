import { Entity } from "./entity";
import { Project } from "./project";

export interface Sprint extends Entity {
    SprintName:	string;
    SprintGoal: string;
    Projet?: Project;	
    ProjetId?: number;
    UserStories?: any;	
}
