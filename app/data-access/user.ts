import { Prisma, User } from "@prisma/client";
import prisma from "../lib/prisma";

export async function createUser(user: Prisma.UserCreateInput): Promise<User> {
    console.log('💿 DAL - CREATE CASHIER', user.email);

    return prisma.user.create({ data: user });
}

export async function getUsers(): Promise<User[]> {
    console.log('💿 DAL - GET USERS');

    return await prisma.user.findMany();
}

export async function getUserCount(): Promise<number> {
    console.log('💿 DAL - GET USERS COUNT');

    return await prisma.user.count();
}
