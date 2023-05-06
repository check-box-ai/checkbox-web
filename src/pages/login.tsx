import React from "react";
import  { PostProps } from "../components/Post";
import Link from "next/link";
import {Icons} from "../components/Icons";
import { UserAuthForm } from "../components/user-auth-form"
import {buttonVariants} from "../components/ui/button";
import {cn} from "../lib/utils";

type Props = {
    drafts: PostProps[];
};

const Login: React.FC<Props> = (props) => {
    return (
        <div className="bg-white flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute top-4 left-4 md:top-8 md:left-8"
                )}
            >
                <>
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    Back
                </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Icons.logo className="mx-auto h-6 w-6" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <UserAuthForm />
                <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    <Link
                        href="/register"
                        className="hover:text-brand underline underline-offset-4"
                    >
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default Login;