'use client';

import Button from "@/app/ui/Button";
import Inline from "@/app/ui/Flexbox/Inline";
import Input from "@/app/ui/Form/Input";
import Stack from "@/app/ui/Flexbox/Stack";
import Form from "@/app/ui/Form";
import Link from "next/link";

export default function LoginForm() {
    return (
        <Form action={ '/dashboard' }>
            <Stack>
                <label htmlFor="email">E-mail</label>

                <Input
                    autoComplete="true"
                    id="email"
                    maxLength={ 100 }
                    minLength={ 5 }
                    name="email"
                    required
                    type="email"
                />
            </Stack>

            <Stack>
                <label htmlFor="password">Senha</label>

                <Input
                    id="password"
                    maxLength={ 50 }
                    minLength={ 8 }
                    name="password"
                    required
                    type="password"
                />
            </Stack>

            <Inline>
                <Button fillWidth type="submit">Entrar</Button>

                <Link href="/cadastro">
                    <Button type="button" variant="secondary">Criar Conta</Button>
                </Link>
            </Inline>

            <a href="#">Esqueci minha senha</a>
        </Form>
    )
}
