"use client";

import TopTitle from '@/components/Global/TopTitle';
import isAuth from '@/components/isAuth'
import Layout from '@/components/Global/Layout';
import Aged from '@/components/Dashboard/Aged';
import TotalValue from '@/components/Dashboard/TotalValue';
import TotalRevenue from '@/components/Dashboard/TotalRevenue';
import GlobalStat from '@/components/Dashboard/GlobalStat';
import { useSelector } from 'react-redux';

const Home = () => {
    const cameraSelected = useSelector((state) => state.camera.cameraChoosed);

    return (
        <section className="relative">
            <Layout>
                <TopTitle title={"user"} subTitle={cameraSelected} />
                <div className="grid xl:grid-cols-10 grid-cols-1  mt-5">
                    <GlobalStat />
                    <Aged />
                </div>
                <div className="grid lg:grid-cols-2 gap-y-2 mt-5">
                    <TotalValue />
                    <TotalRevenue />
                </div>
            </Layout>
      </section>
    )
}

export default isAuth(Home)