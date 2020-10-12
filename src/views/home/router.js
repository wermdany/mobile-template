import LayOut from "@/layout"
export default [
  {
    path: "/",
    component: LayOut,
    children: [
      {
        path: "index",
        component: () => import("@/views/home")
      }
    ]
  }
];
