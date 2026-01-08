"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { StatusBadge, getStatusType } from "@/components/status-badge";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  Calculator,
  Heart,
  ChevronLeft,
  Info,
  Scale,
  Ruler,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";

const BMI_CATEGORIES = [
  {
    max: 18.5,
    labelKey: "bmi_category_underweight",
    descKey: "bmi_category_underweight_desc",
    color: "sky",
  },
  {
    max: 25,
    labelKey: "bmi_category_normal",
    descKey: "bmi_category_normal_desc",
    color: "emerald",
  },
  {
    max: 30,
    labelKey: "bmi_category_overweight",
    descKey: "bmi_category_overweight_desc",
    color: "amber",
  },
  {
    max: 35,
    labelKey: "bmi_category_obese_1",
    descKey: "bmi_category_obese_1_desc",
    color: "orange",
  },
  {
    max: 40,
    labelKey: "bmi_category_obese_2",
    descKey: "bmi_category_obese_2_desc",
    color: "rose",
  },
  {
    max: Infinity,
    labelKey: "bmi_category_obese_3",
    descKey: "bmi_category_obese_3_desc",
    color: "red",
  },
];

export default function BMICalculatorPage() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const { t } = useI18n();

  const bmi = useMemo(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return null;
    const heightM = h / 100;
    return Math.round((w / (heightM * heightM)) * 10) / 10;
  }, [height, weight]);

  const category = useMemo(() => {
    if (!bmi) return null;
    return (
      BMI_CATEGORIES.find((c) => bmi < c.max) ||
      BMI_CATEGORIES[BMI_CATEGORIES.length - 1]
    );
  }, [bmi]);

  const handleCalculate = () => {
    if (bmi) setShowResult(true);
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                {t("app_name")}
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-emerald-100 text-emerald-700 border-emerald-200"
              >
                <Calculator className="size-3 mr-1" />
                {t("bmi_page_badge")}
              </Badge>
              <LanguageSwitcher variant="minimal" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          {t("common_back_to_home")}
        </Link>

        <div className="space-y-6">
          {/* Hero */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
              {t("tool_bmi_title")}
            </h1>
            <p className="text-slate-600">{t("bmi_page_subtitle")}</p>
          </div>

          {/* Calculator Card */}
          <Card className="bg-white border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-600" />
                {t("bmi_page_input_title")}
              </CardTitle>
              <CardDescription>
                {t("bmi_page_input_description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height" className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-slate-400" />
                    {t("step2_height_label")}
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    inputMode="decimal"
                    placeholder={t("step2_height_placeholder")}
                    value={height}
                    onChange={(e) => {
                      setHeight(e.target.value);
                      setShowResult(false);
                    }}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight" className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-slate-400" />
                    {t("step2_weight_label")}
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    inputMode="decimal"
                    placeholder={t("step2_weight_placeholder")}
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                      setShowResult(false);
                    }}
                    className="text-lg"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleCalculate}
                  disabled={!bmi}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                >
                  {t("bmi_page_calculate")}
                </Button>
                {showResult && (
                  <Button variant="outline" onClick={handleReset}>
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Result */}
          {showResult && bmi && category && (
            <Card
              className={cn(
                "border-2",
                category.color === "sky" && "border-sky-200 bg-sky-50",
                category.color === "emerald" &&
                  "border-emerald-200 bg-emerald-50",
                category.color === "amber" && "border-amber-200 bg-amber-50",
                category.color === "orange" && "border-orange-200 bg-orange-50",
                category.color === "rose" && "border-rose-200 bg-rose-50",
                category.color === "red" && "border-red-200 bg-red-50"
              )}
            >
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">
                      {t("bmi_page_your_bmi")}
                    </p>
                    <p className="text-5xl font-bold tabular-nums text-slate-900">
                      {bmi}
                    </p>
                  </div>
                  <StatusBadge
                    status={getStatusType(category.color)}
                    label={t(category.labelKey)}
                    className="text-base px-4 py-1"
                  />
                  <p className="text-sm text-slate-700 max-w-sm mx-auto">
                    {t(category.descKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* BMI Scale Reference */}
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-700">
                {t("bmi_page_categories_title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {BMI_CATEGORIES.map((cat, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-2 rounded-md ${
                      showResult && category?.labelKey === cat.labelKey
                        ? "ring-2 ring-offset-1 ring-slate-400"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          "size-3 rounded-full shrink-0",
                          cat.color === "sky" && "bg-sky-500",
                          cat.color === "emerald" && "bg-emerald-500",
                          cat.color === "amber" && "bg-amber-500",
                          cat.color === "orange" && "bg-orange-500",
                          cat.color === "rose" && "bg-rose-500",
                          cat.color === "red" && "bg-red-500"
                        )}
                      />
                      <span className="text-sm text-slate-700">
                        {t(cat.labelKey)}
                      </span>
                    </div>
                    <span className="text-sm text-slate-500">
                      {i === 0
                        ? `< ${cat.max}`
                        : i === BMI_CATEGORIES.length - 1
                          ? `≥ ${BMI_CATEGORIES[i - 1].max}`
                          : `${BMI_CATEGORIES[i - 1].max} - ${cat.max - 0.1}`}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Info Alert */}
          <Alert className="bg-slate-100 border-slate-200">
            <Info className="h-4 w-4 text-slate-600" />
            <AlertTitle className="text-slate-800">
              {t("bmi_page_about_title")}
            </AlertTitle>
            <AlertDescription className="text-slate-600">
              {t("bmi_page_about_description")}
            </AlertDescription>
          </Alert>

          <Separator />

          {/* CTA */}
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 border-0 text-white">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">
                  {t("bmi_page_cta_title")}
                </h3>
                <p className="text-emerald-100 text-sm">
                  {t("bmi_page_cta_description")}
                </p>
                <Link href="/assessment/step-1">
                  <Button
                    variant="secondary"
                    className="bg-white text-emerald-700 hover:bg-emerald-50 gap-2"
                  >
                    {t("common_start_assessment")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
