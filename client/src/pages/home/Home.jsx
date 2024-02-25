import Container from "../../components/container/Container"
import Header from "../../components/header/Header"

const Home = () => {
    return (
        <Container>
            <Header/>
            <section className="bg-white p-4 rounded-lg w-full max-w-3x mx-auto flex justify-center items-center gap-2">
                <input
                    className="w-full border-2 rounded-lg h-9 px-3"
                    placeholder="Digite o nome do carro..."/>
                <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-mediu text-lg">
                    Buscar
                </button>
            </section>

            
            <h1 className="font-bold text-center mt-6 text-2xl mb-4">
            Carros novos e usados em todo o Brasil
            </h1>


            <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> {/*SECTION CARD OF CARS*/}

                <section className="w-full bg-white rounded-lg">
                    <img
                        className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all" 
                        src="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAM1WeTSV7RZ_cI6DxzxLA8KHjGVIyJAv5CNEGTKcjJHinEMOyRiJg5AxU7eUDIcjQsohw0HGECljoWOoZIpw3_vd---966511_rW3X_s9b772etZ-9n7t397ly4BdAAOMDk4GJjuiAh4eo5pMAIQ5AcAYEDsjA4GpT-ENplZrCf_ZWZ3A2hCAO7SNQbExYKR7bIv1tNdydvP3ZNjZWWFi4GNQFBwDyIo4PxUMYgHDv4gBHYq_lQM8aeqiw1kK_umOrEJAuhrblLFfOIV5rXX7eKLyyZY3-BpUQBfLqBykx6PUlUilptKBN72GgeyXgTQYL6g8JkfTuEYRj6vdmzsrKLg-RoA2TTEKg5VyxtFFKWir4qTT6Y3bA0DGOtCn9_QLFA_xHvpam3TNxubeuNNAD99TOYjfEAxXI41oYjxamOtdUeWAbzxLKajSxuj0CA-8TV7JLeMDT9_AMA4BVLYKkEqKMt2TeB4_b6IsA89QwBGBc1f8pnKONw37ZZW1Zn7cebLaRUAH5Rrp_rmuV1tzi0d-eZTpnFdwNcFQNc6cuwiueuPObpyXJm6tqhwAikfwM5fecmOJJHwI7FGEUpZMY354ih7AJu9vgSwhzHa36eW_6zcZZffp8eUBqDTCx10UjW7R0Xk9n6zMpX8Cz4xXwD8YdJg3uaoa8I9erkvbB6PllJxIQHox1b_wmr0lFdD3VCFbZS2r_BhxdsA5j_pmBy3VvqKP4-nL7rc3pvpLtsHIMYOQ9yhmr6-Z8xccvmnvJ6A7WwvgNlu2Nc66RZvP_LxRjO7-6cOx599B-D--Nnv9ICt0zzDhHCHCeYCXQJOE8AGenuOfn3bmFGrfTrzuHG_TAKnD4Dda2InVa3nhuWGrqceuyFbDlVygwFsrEmfb4p8b1R98DneZE6otdnk4TRyQ8i13oyxBhnMwELUakuDT4C-XBaAw2XhR3PLaUzedm02Gv3-WhetzLQAvPkzVnKHYr6rmy53nPaGhUXHfvsWgN6z_VY1TucCeBJochYSB1q05h9rAxix3iSl7OJMBK9cE1O6R2WFizXiASRTBH4JfxpAXy50hqZ2jrfb3KW7AbyQ83Uwe9FCW1NRyyWD9z6b105eJICBX7l3ZSfsZP_m4Z8Wl3KL20AhKwlAR1qfxDPa2JrEfNyq_ojIKmqU6A-g7BAql2jcSHpGsndHb5yce-R-E0EftbA3M-RWELfD_pY5smScQ1jKagaAQsIyy5k9Lt_QAteJttqJN3eJhx4CGHmv0tIjZteU5ZLax1OJRyZ5b3w4AuD5mCCFYO0bvzIzSyqWl7wsbxIp5gBuenp-O-KT9-Zcn0HJqa6E_tBufAGAv5fG4stR82PUkQ2uy6O2D9ikGJEYvF0vROM6t_APb77LbJTD15K3rMUAfHHfhutTMZ2bQzJLL4WOqfJi-Pw3JGfprYVjos4R4oKoka0qTmOX_i3EqvPcroj3lyNz26RoQM-Cs1fyN6dBAAtrj_3EkqiPnGg6nbmi0b4i0lKTAB54fiIVM9UwFmNXcNdvYxpDrVI2RPLr0bmYuDG1L1DlnFmquTIa9dvEDoBdQiV-_r3TPRwJfYYBJN_DbONCqgBy51PGSDIKkxQ-2QJSc23BakzicQApbt7i3Ao5DDUZ0jTO9uf-tO5uBCWnBdFWsxI2byc4zdzl02fG60Ip6QAaVQUf3LbvVf7Bfiuq0nEho92ZoQfAIxpdJ_K804fx7eqq8lK-r_YlEZAaxz4L3a_7JcbzV6xq6_hOJEnU8CrCMIHrD75PzN6LTNarGpVkZhuo4j7lhvQ8N75G2lGrbWjGv5WKYrFOJ75HOEo1uVFrcOaXi6wmGld2UXcoUke4GUABa_xC4EoT4WvxXAOnkvSt1ivtXABKrl8xun3MEBv7w7aGYSaxNttIeA_ATGbLmof0cGtRH8f3s2sLrNLWZAqSnd1Vzbz-1jtpj0tMeHL45C5acvEDeO2QVdru5ikdI9V3AmJMB1sSN6zfAHi9pfelEJ247FMUX_192my3Ryx6CcBb08eFXoIro9nJFPdKLvbaEvecBgDZP0pOPNW12H84LIWQmsvPunLz0lsAjze4sEhUW0f91hI7NcefQpk6IaEB4Lf5mo865qeGzinxTSmaTnVIdp1FuK9yc_q50gH8C3Whx12xLuxf3iluCyGvODq39-TL8ufzeR2vOc601XG5TrkCuLcnsd0-45hfc7cjjiDz1PsMlorgd7vrlY1vys0zTTWbT0fb5ejZ_ilmAMZHsNC2272c8uHU0WZ550OFUnMIw8jbC377PUk0IUF0XT5Ne_0Gp9hdgCBqz6GxVaY0qjP1YSCBTLbLSlHfAHDsiClwiwhYN3q1XjTHbUzgEJEmANj_SMWB6HbQQXm-e4kqs3hO-46mGoBXr3Dabz3aWh-YiHzUMmdLvqA16IVUk6nFXFlE3KYG96DXPjOcfcbtfBDShadd3dQk3MnRT4O7T9LYgkt7ae8BDBXe2LQT0fLT6Qf8jp9N0YIaRuVItyy2LhnQG42zHcrav5xdv_8k3_Qckl_yLp2nzQOShXPO9wfpgWEZmSsAJmGE1eqsqtRoRMeMPIiNflY1isQ78xJry9YtEt2_0GXvwef37mHM7zoAXkkK4Fe7YSw-32TCih_g6s7ZMbRF4h1UtP-A4n3Pn2mttfd4lcdk_THC4A22s63l4QkovTGhyOlaXc5FVm8jAO8u71b495KJ7Ae1UIYSXyUCQmL7ALx3dnBjEl1uOK7DyCl9Xa6z5fMeEplbYsbTjrQ1l9Dgkg1e_mpLExCM-Eocpfu85VJL8BRBMZK5U-JZ1-t5kH7rV1rM6f-jFL2PLVRcM2zJNKz8NwC5ghYEu30mpFZwfGqqE8dX1J2klAEs4zBujm72qX660ymtVOjRRh7UfAqg_yPmu3wDr7f69KRIZjY9ZlQLQyVkoj8o8unCdwSWKt8yKqWjK_axFCCVD1m9gLV9nFxnVP_EhI8h_vtn8xkOAI9p2A-SnU3SKhEWrSsWvRPpWyQMIKkw_jrNsMlU2b3aKrJoUO4on6o6gER_G6Kxc-wAtVQ_2tbi2pm6WtYRAFextIkNuXHlqeisVj_DmdkK1hlk8q7d7xtnKillkq4dDpOHYSewa_odyNt2LDkrGgQpVT0M01aLusHcg2zVCM4WC41DHM2JJX1KoS5VBtJLI5qHEKwnHV8c2c6wyaSQ9CLTRQnusuQoABnk_-icLLnO_Hp68PZLU4bkS_dsEZTcaVWimN8TEbgWWap31KBBtEPt-0lkU4iLrY7M7cSMf-jLOV3LUV-f3zkO4MJ7mYhRDSevEddli9NdycU0jgwkk_rXEosXQvaeZBYPat45cp_I_tMxGkB1hQWO0yOhbz4u6lji1TeKNpm0qch0GhvyErL5ALoe7OmPjGSIGSXxWQKIPRH3SmhUsqvmU9lSZ46_pO6bH0gHZNt8lqPMZq7NVp5YEpLj7z4cXPYZoJGdjykfUSgJRLF7IYpFCfyp_7ENliKK8c9_NIYJAEw48oFUEBFOzgDcFT8sDuur6Iq75neVG7Exgn8KM_j3gvsPZ_8vwvA_nv_V8lfH--d9PDLK_6XwofTPm1j_Hdh3MeCXDAAA.png?wid=640"
                        alt="Carro"
                    />
                    <p className="font-bold mt-1 mb-2 px-2">Audi TT</p>

                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-6">Ano 2024/2024 | 23.000 km</span>
                        <strong className="text-black font-medium text-xl">R$ 190.000</strong>
                    </div>

                    <div className="w-full h-px bg-slate-200 my-2"></div>

                    <div className="px-2 pb-2">
                        <span className="text-black">
                            Natal - RN
                        </span>
                    </div>
                </section>

            </main>
        </Container>
    )
}

export default Home