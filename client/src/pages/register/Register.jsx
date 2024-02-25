import logoImg from '../../assets/logo.svg'
import Container from '../../components/container/Container'
import { Link } from 'react-router-dom'
import Input from '../../components/input/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//Logica para criar nosso schema validator de REGISTER

const Schema = z.object({
    name: z.string().nonempty("O campo nome é obrigatorio!"),
    email: z.string().email("Insira um email valido").nonempty("O campo email é obrigatorio"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 carcteres").nonempty("O campo senha é obrigatorio")
})

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(Schema),
        mode: "onChange"
    })

    function onSubmitLogin(data) {    //Esse onSubmit do react hook form recebe um data que basicamente pega todos os valores inseridos nos campos
        console.log(data)
    }

    return (
        <Container>
            <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
                <Link to="/" className="mb-6 max-w-sm w-full">
                    <img
                        src={logoImg}
                        alt="Logo do Site"
                        className='w-full'
                    />
                </Link>

                <form className='bg-white max-w-xl w-full rounded-lg p-4'>

                    <div className="mb-3">
                    <Input
                        type="text"
                        placeholder="Digite seu Nome Completo..."
                        name="name"
                        error={errors.name?.message}
                        register={register}
                    />
                    </div>

                    <div className="mb-3">
                    <Input
                        type="email"
                        placeholder="Digite seu Email..."
                        name="email"
                        error={errors.email?.message}
                        register={register}
                    />
                    </div>

                    <div className="mb-3">
                    <Input
                        type="password"
                        placeholder="Digite sua Senha..."
                        name="password"
                        error={errors.password?.message}
                        register={register}
                    />
                    </div>

                    <button 
                        type='submit' 
                        className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium" 
                        onSubmit={handleSubmit(onSubmitLogin)}
                    >
                        Registrar
                    </button>
                </form>

                <Link to={"/login"}>
                    Ja possui uma conta? Faça o login!
                </Link>
            </div>
        </Container>
    )
}

export default Register