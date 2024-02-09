
import { ProfileLinkNav } from "@/ui/components/Profile/profile-link-nav";
import Achievements from "@/ui/components/achievements/achievements";
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { UserInfo } from "@/ui/components/user-infos/user-infos";
import { useRouter } from "next/router";

export default function Achievement() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <Layout>
      {/* <Container className="p-20"> */}
      <Container className="p-12 flex flex-col gap-[80px]">
            <UserInfo id={id}/>
            <ProfileLinkNav id={id}/>
            <Achievements/>
        </Container>
    </Layout>
  );
}