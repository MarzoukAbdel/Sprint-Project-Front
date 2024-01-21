import { Entity } from "./entity";
import { Sprint } from "./sprint";

export interface Project extends Entity {
    Libelle: string ; 
    Description?: string; 
    SprintDays?: number;
    Sprints?: Sprint[];
}

