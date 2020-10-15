import LayOut from "@/layout";
export default [
  {
    path: "/",
    component: LayOut,
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/home")
      }
    ]
  }
];
