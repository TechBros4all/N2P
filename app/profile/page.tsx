import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import AccountOverviewTabContent from "@/components/Profile/AccountOverviewTabContent";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <main className="container xl:px-28 py-8 min-h-[calc(100vh-200px)] md:h-[calc(100vh-200px)]">
        <Tabs
          defaultValue="account"
          className="w-full flex flex-col md:flex-row gap-4 h-full"
        >
          <TabsList className="flex flex-col items-start justify-start gap-2 h-full bg-transparent w-full md:w-1/4 md:border-r-2 rounded-none">
            <TabsTrigger
              className="w-full items-start justify-start"
              value="account"
            >
              Account Overview
            </TabsTrigger>
            <TabsTrigger
              className="w-full items-start justify-start"
              value="order"
            >
              Order History
            </TabsTrigger>
            <TabsTrigger
              className="w-full items-start justify-start"
              value="inbox"
            >
              Inbox
            </TabsTrigger>
            <TabsTrigger
              className="w-full items-start justify-start"
              value="settings"
            >
              Account Settings
            </TabsTrigger>
          </TabsList>
          <div className="flex-1">
            <Separator className="h-2 md:hidden" />
            <TabsContent value="account">
              <AccountOverviewTabContent />
            </TabsContent>
            <TabsContent value="order">Change your password here.</TabsContent>
            <TabsContent value="inbox">Make r account here.</TabsContent>
            <TabsContent value="settings">Make changes to your</TabsContent>
          </div>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;