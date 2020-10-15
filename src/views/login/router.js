import LayOut from "@/layout";
export default [
  {
    path: "/a",
    component: LayOut,
    children: [
      {
        path: "",
        component: () => import("@/views/login")
      }
    ]
  }
];
