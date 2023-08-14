import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountManage from "@src/components/AccountManage";
import CartButton from "@src/components/CartButton";
import Header from "@src/components/Header";
import HomeButton from "@src/components/HomeButton";
import Topbar from "@src/components/Topbar";
import TopbarLeft from "@src/components/TopbarLeft";
import TopbarRight from "@src/components/TopbarRight";
import BaseLayout from "@src/layouts/BaseLayout";
import { useForm } from "react-hook-form";
import HeaderMenu from "@src/components/HeaderMenu";
import BreadcrumbLink from "@src/components/BreadcrumbLink";
import Messages from "@src/components/Messages";
import { CreateCategoryFields } from "@src/types";
import { createCategoryValidator } from "@src/validators";
import route from "ziggy-js";
import { router } from "@inertiajs/react";


export default function AdminCategoryCreatePage() {


    const { register, handleSubmit, formState: { errors }, } = useForm<CreateCategoryFields>({
        resolver: yupResolver(createCategoryValidator)
    });

    const onSubmit = async (data: CreateCategoryFields) => {
        router.post(route("admin.category.store"), {
            name: data.name,
            image: data.image ? data.image[0] : null
        }, {
            forceFormData: true
        });
    }

    return <>
        <BaseLayout title="Nuova categoria">

            <Topbar>
                <TopbarLeft>
                    <HomeButton></HomeButton>
                </TopbarLeft>
                <TopbarRight>
                    <CartButton></CartButton>
                    <AccountManage></AccountManage>
                </TopbarRight>
            </Topbar>
            <Header></Header>
            <HeaderMenu>
                <ol className="flex h-16 flex-row space-x-2 items-center pl-8 text-white">
                    <li>
                        <BreadcrumbLink href={route("admin.category.list")}>
                            Categorie
                        </BreadcrumbLink>
                    </li>
                    <li>::</li>
                    <li>Crea categoria</li>
                </ol>
            </HeaderMenu>
            <div className="flex flex-col p-8 flex-grow">
                <Messages></Messages>
                <form className="flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-1/3 flex flex-col space-y-2">
                        <label className="form-label">Nome</label>
                        <input type="text"
                            {...register("name")}
                            className={errors.name ? "text-input-invalid" : "text-input"} />
                        <div className="invalid-feedback">
                            {errors.name?.message}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col space-y-2">
                        <label className="form-label">Immagine</label>
                        <input type="file"
                            {...register("image")}
                        />
                        <div className="invalid-feedback">
                            {errors.image?.message}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col space-y-2 items-start">
                        <button type="submit" className="btn-success ">
                            Crea
                        </button>
                    </div>
                </form>
            </div>
        </BaseLayout>
    </>
}
