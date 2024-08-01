<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();
const gql = useStrapiGraphQL();
const route = useRoute();
const slug = computed(() => route.params.slug);

const query = (slug: string) =>
  gql<any>(`
    query Article($slug: String!) {
      articulos(filters: { slug: { eq: $slug } }) {
        data {
          attributes {
            titulo
            descripcion
            slug
            imagen {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  `, {
    slug
  });

const {
  data: article,
  suspense,
  isLoading,
} = useQuery({
  queryKey: ["article", slug],
  queryFn: () => query(slug.value),
  select({ data }) {
    console.log("data ->", data);
    return data.articulos.data[0].attributes;
  },
  // 15 minutes
  staleTime: 1000 * 60 * 15,
});

await suspense();
</script>

<template>
  <section>
    <div class="my-8">
      <UButton
        label="Volver al blog"
        :ui="{
          base: 'self-start',
          rounded: 'rounded-full',
          variant: {
            solid: 'bg-[#f18a00] font-bold px-8 py-3 hover:bg-[#f18900c7]',
          },
        }"
        @click="() => $router.push('/blog')"
      />
    </div>

    <div class="grid gap-8 md:grid-cols-[1fr_30%]">
      <div>
        <NuxtPicture
          v-if="article?.imagen?.data?.attributes?.url"
          class="image"
          :src="article.imagen.data.attributes.url"
          :alt="article.imagen.data.attributes.alternativeText"
        />
        <h1 class="text-2xl text-[var(--color-secondary)] font-black text-balance my-8">
          {{ article?.titulo }}
        </h1>
        <div
          class="[&_p]:my-4"
          v-html="markdown.render(article?.descripcion || '<p>description</p>')"
        />
      </div>

      <CompanyInfo />
    </div>
  </section>
</template>

<style scoped>
:deep(.image img) {
  @apply w-full rounded-xl border border-slate-400 p-3;
}
</style>