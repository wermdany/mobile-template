import LayOut from "@/layout";
export default [
  {
    path: "/settings",
    component: LayOut,
    children: [
      {
        path: "index",
        component: () => import("@/views/settings/children"),
        meta: {
          navBar: {
            title: "Setting.Settings"
          }
        }
      }
    ]
  }
];
