<template>
    <UDashboardPanel>
        <template #header>
            <AppHeader />
        </template>
        <template #body>
            <main>
                <div class="mb-8">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-semibold">Your Budgets</h2>
                        <button class="text-emerald-400 text-sm hover:text-emerald-300">
                            Manage Budgets
                        </button>
                    </div>
                    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <!-- Budget cards will go here -->
                    </section>
                </div>
            </main>
        </template>
    </UDashboardPanel>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>