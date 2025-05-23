const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [

      {
        name: "Index",
        path: "/index",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        name: "JesusVideoMaster",
        path: "/jvideo/:lesson?/:languageCodeHL?/:languageCodeJF?",
        component: () => import("src/pages/VideoMaster.vue"),
      },
      {
        name: "ReadMeFirst",
        path: "/readfirst/:study?",
        component: () => import("src/pages/ReadMeFirst.vue"),
      },

      {
        name: "SeriesMaster",
        path: "/series/:study?/:lesson?/:languageCodeHL?",
        component: () => import("src/pages/SeriesMaster.vue"),
      },

      {
        name: "AskHisFollowers",
        path: "/questions",
        component: () => import("src/pages/RestorePage.vue"),
      },
      {
        name: "reset",
        path: "/reset",
        component: () => import("pages/ResetData.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
