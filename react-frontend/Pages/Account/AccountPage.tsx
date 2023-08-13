import DashboardAdmin from "@src/Pages/Account/components/DashboardAdmin";
import AccountManage from "@src/components/AccountManage";
import CartButton from "@src/components/CartButton";
import Header from "@src/components/Header";
import Messages from "@src/components/Messages";
import Topbar from "@src/components/Topbar";
import TopbarLeft from "@src/components/TopbarLeft";
import TopbarRight from "@src/components/TopbarRight";
import BaseLayout from "@src/layouts/BaseLayout";
import HomeButton from "@src/components/HomeButton";
import HeaderMenu from "@src/components/HeaderMenu";
import DashboardDefault from "@src/Pages/Account/components/DashboardDefault";
import BreadcrumbLink from "@src/components/BreadcrumbLink";
import route from "ziggy-js"

export default function LoginPage() {


    return <>
        <BaseLayout title='Il mio account'>
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
                <ol className="flex flex-row space-x-2 items-center pl-8 text-white h-16">
                    <li>
                        <BreadcrumbLink href={route('account.dashboard')}>
                            Profilo
                        </BreadcrumbLink>
                    </li>
                    <li>::</li>
                    <li>Home profilo</li>
                </ol>
            </HeaderMenu>
            <div className="pl-8 pr-8 pt-8 flex flex-col space-y-4 pb-8">
                <Messages></Messages>
                <DashboardDefault></DashboardDefault>
                <DashboardAdmin></DashboardAdmin>
            </div>
        </BaseLayout>
    </>
}
