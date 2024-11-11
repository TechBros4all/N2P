import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import AccountOverviewTabContent from "@/components/Profile/AccountOverviewTabContent";
import InboxTab from "@/components/Profile/InboxTab";
import OrderHistoryTab from "@/components/Profile/OrderHistoryTab";
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
              className="w-full items-start justify-start data-[state=active]:bg-red-100 hover:bg-red-50 transition-all duration-500 ease-in-out"
              value="account"
            >
              Account Overview
            </TabsTrigger>
            <TabsTrigger
              className="w-full items-start justify-start data-[state=active]:bg-red-100 hover:bg-red-50 transition-all duration-500 ease-in-out"
              value="order"
            >
              Order History
            </TabsTrigger>
            <TabsTrigger
              className="w-full items-start justify-start data-[state=active]:bg-red-100 hover:bg-red-50 transition-all duration-500 ease-in-out"
              value="inbox"
            >
              Inbox
            </TabsTrigger>
            <TabsTrigger
              className="w-full items-start justify-start data-[state=active]:bg-red-100 hover:bg-red-50 transition-all duration-500 ease-in-out"
              value="settings"
            >
              Account Settings
            </TabsTrigger>
          </TabsList>
          <div className="flex-1 h-full overflow-y-scroll scrollbar-hide">
            <Separator className="h-2 md:hidden" />
            <TabsContent value="account">
              <AccountOverviewTabContent />
            </TabsContent>
            <TabsContent value="order">
              <OrderHistoryTab />
            </TabsContent>
            <TabsContent value="inbox">
              <InboxTab />
            </TabsContent>
            <TabsContent value="settings">Make changes to your</TabsContent>
          </div>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
