import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PROCESS_TABS } from "@/content/process";
import { StepList } from "./StepList";

export function ProcessTabs() {
  return (
    <Tabs defaultValue={PROCESS_TABS[0].id} className="mt-10">
      <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-lg bg-muted p-1 sm:inline-grid sm:w-auto">
        {PROCESS_TABS.map((t) => (
          <TabsTrigger
            key={t.id}
            value={t.id}
            className="min-h-11 whitespace-normal rounded-md px-4 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:shadow-sm"
          >
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {PROCESS_TABS.map((t) => (
        <TabsContent key={t.id} value={t.id} className="mt-8">
          <p className="mb-8 max-w-xl text-muted-foreground">{t.intro}</p>
          <StepList steps={t.steps} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
