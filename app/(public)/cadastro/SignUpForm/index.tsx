'use client';

import Button from "@/app/ui/Button";
import Inline from "@/app/ui/Flexbox/Inline";
import Input from "@/app/ui/Form/Input";
import Stack from "@/app/ui/Flexbox/Stack";
import Form from "@/app/ui/Form";
import Link from "next/link";
import { useActionState } from "react";
import { createUserAction } from "./action";

export default function SignUpForm() {
    const [state, action, isPending] = useActionState(createUserAction, null);

    return (
        <Form action={ action }>
            <Inline>
                <Stack>
                    <label htmlFor="firstname">Nome</label>

                    <Input
                        autoComplete="true"
                        id="firstname"
                        maxLength={ 100 }
                        name="firstname"
                        required
                        type="text"
                    />
                </Stack>

                <Stack>
                    <label htmlFor="lastname">Sobrenome</label>

                    <Input
                        autoComplete="true"
                        id="lastname"
                        maxLength={ 100 }
                        name="lastname"
                        required
                        type="text"
                    />
                </Stack>

            </Inline>

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

            <Stack>
                <label htmlFor="confirmPassword">Confirmar Senha</label>

                <Input
                    id="confirmPassword"
                    maxLength={ 50 }
                    minLength={ 8 }
                    name="confirmPassword"
                    required
                    type="password"
                />
            </Stack>

            <Inline>
                <Button 
                    disabled={ isPending }
                    fillWidth 
                    type="submit"
                >
                    { isPending ? 'Criando Conta...' : 'Criar Conta' }
                </Button>

                <Link href="/login">
                    <Button type="button" variant="secondary">Voltar</Button>
                </Link>
            </Inline>
        </Form>
    )
}
