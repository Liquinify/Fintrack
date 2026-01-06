<template>
  <UPageGrid class="lg:grid-cols-4 gap-3 sm:gap-3 lg:gap-3">
    <UPageCard
      v-for="(stat, index) in stats"
      :key="index"
      :icon="stat.icon"
      :title="stat.title"
      variant="subtle"
      :ui="{
        container: 'gap-y-2',
        wrapper: 'items-start justify-between',
        leading:
          'p-3 rounded-full bg-primary/10 ring-1 ring-inset ring-primary/30',
        title: 'text-xs uppercase tracking-wide text-muted',
      }"
      class="bg-linear-to-br from-black/40 to-black/50 backdrop-blur-sm rounded-lg hover:z-10 border border-white/10 relative overflow-hidden"
    >
      <!-- Fade background effect -->
      <div
        class="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 pointer-events-none"
      ></div>

      <div class="flex justify-between items-center gap-3 relative z-10">
        <span class="text-2xl font-semibold text-foreground">
          {{ stat.value }}
        </span>

        <UBadge
          :color="stat.variation > 0 ? 'success' : 'error'"
          variant="subtle"
          size="xs"
        >
          {{ stat.variation > 0 ? "+" : "" }}{{ stat.variation }}%
        </UBadge>
      </div>
    </UPageCard>
  </UPageGrid>
</template>

<script setup lang="ts">
const props = defineProps<{
  period: any;
  range: any;
}>();

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const baseStats = [
  {
    title: "Загальний Бюджет",
    icon: "i-lucide-users",
    minValue: 400,
    maxValue: 1000,
    minVariation: -15,
    maxVariation: 25,
  },
  {
    title: "Отримані гроші за місяць",
    icon: "i-lucide-chart-pie",
    minValue: 1000,
    maxValue: 2000,
    minVariation: -10,
    maxVariation: 20,
  },
  {
    title: "Витрати за місяць",
    icon: "i-lucide-circle-dollar-sign",
    minValue: 200000,
    maxValue: 500000,
    minVariation: -20,
    maxVariation: 30,
    formatter: formatCurrency,
  },
  {
    title: "Orders",
    icon: "i-lucide-shopping-cart",
    minValue: 100,
    maxValue: 300,
    minVariation: -5,
    maxVariation: 15,
  },
];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const { data: stats } = await useAsyncData(
  "stats",
  async () => {
    return baseStats.map((stat) => {
      const value = randomInt(stat.minValue, stat.maxValue);
      const variation = randomInt(stat.minVariation, stat.maxVariation);

      return {
        title: stat.title,
        icon: stat.icon,
        value: stat.formatter ? stat.formatter(value) : value,
        variation,
      };
    });
  },
  {
    watch: [() => props.period, () => props.range],
    default: () => [],
  },
);
</script>
