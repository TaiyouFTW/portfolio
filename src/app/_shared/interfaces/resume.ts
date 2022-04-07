import { Education } from "./education";
import { Experience } from "./experience";
import { Project } from "./project";
import { Skills } from "./skills";
import { Social } from "./social";

export interface Resume {
    name: string;
    birthDate: Date;
    nationality: string;
    aboutMe: string;
    photo: string;
    role: string;
    yearsOfExperience: number;
    socials: Social[];
    projects: Project[];
    skills: Skills[];
    experiences: Experience[];
    education: Education[];
}
