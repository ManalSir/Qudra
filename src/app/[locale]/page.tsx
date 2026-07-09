import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  "dashboard",
  "instructors",
  "schools",
  "workshops",
  "schedule",
  "timesheets",
  "courses",
] as const;

const stats = [
  {
    key: "instructors",
    value: "0",
  },
  {
    key: "schools",
    value: "0",
  },
  {
    key: "workshops",
    value: "0",
  },
] as const;

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold">{t("app.name")}</h1>
            <p className="text-sm text-muted-foreground">
              {t("app.description")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="secondary">{t("roles.admin")}</Badge>
            <Button size="sm">{t("auth.logout")}</Button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">
        <aside className="hidden w-64 border-l bg-card p-4 md:block">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item}
                variant={item === "dashboard" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                {t(`navigation.${item}`)}
              </Button>
            ))}
          </nav>
        </aside>

        <section className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{t("dashboard.title")}</h2>
            <p className="text-muted-foreground">{t("dashboard.subtitle")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.key}>
                <CardHeader>
                  <CardDescription>
                    {t(`dashboard.stats.${stat.key}.title`)}
                  </CardDescription>
                  <CardTitle className="text-3xl">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t(`dashboard.stats.${stat.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Separator className="my-6" />

          <Card>
            <CardHeader>
              <CardTitle>{t("dashboard.currentStepTitle")}</CardTitle>
              <CardDescription>
                {t("dashboard.currentStepDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">
                {t("dashboard.temporaryPageNote")}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}