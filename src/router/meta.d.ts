interface Title {
  type: "icon" | "text";
  icon: String | Object;
}
interface Btn {
  icon: Function;
  event: Event;
}
export interface Meta {
  navBar?: {
    title?: Title | String;
    leftBtn?: Btn;
    rightBtn?: Btn;
    placeholder?: Boolean | true;
    use?: Boolean | true;
  };
  tabBar?: {
    name?: String;
    use?: Boolean | true;
  };
}
