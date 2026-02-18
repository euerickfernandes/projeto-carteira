import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getGoal(id: string){
    return await prisma.goal.findFirst({ where: { id: id } });
}

export async function getGoals(){
    return await prisma.goal.findMany({});
}

export async function createGoal(goal: Prisma.GoalCreateInput){
    return await prisma.goal.create({
        data: goal
    });
}