import LayOut from "@/layout";
export default [
  {
    path: "/home",
    component: LayOut,
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/home/children"),
        meta: {
          tabBar: {
            name: "BNUPayHome"
          }
        }
      },
      {
        path: "scan",
        component: () => import("@/views/home/children/scan")
      }
    ]
  }
];
