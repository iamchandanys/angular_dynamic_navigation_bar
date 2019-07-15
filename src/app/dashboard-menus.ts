const pageUrl = "https://www.abc.com/";

export const NavBarData = [
  {
    applicationName: "Dashboard",
    url: pageUrl + "dashboard",
    Visible: "false",
    Permission: ["Dashboard Permission"]
  },
  {
    applicationName: "Global",
    url: pageUrl + "global",
    Visible: "false",
    Permission: ["Global Permission"]
  },
  {
    applicationName: "Fruits",
    icon: "fa fa-caret-down",
    Visible: "false",
    Permission: [],
    child: [
      {
        applicationName: "Apple",
        url: pageUrl + "apple",
        Visible: "false",
        Permission: ["Apple Permission"],
        subchild: []
      },
      {
        applicationName: "Orange",
        url: pageUrl + "orange",
        Visible: "false",
        Permission: ["Orange Permission"],
        subchild: []
      }
    ]
  },
  {
    applicationName: "Vehicles",
    icon: "fa fa-caret-down",
    Visible: "false",
    Permission: [],
    child: [
      {
        applicationName: "Cars",
        url: pageUrl + "mypage2sub1",
        Visible: "false",
        Permission: ["Cars Permission"],
        subchild: []
      },
      {
        applicationName: "Busses",
        subMenuIcon: "fa fa-caret-right",
        Visible: "false",
        Permission: ["Volvo Bus Permission", "Private Bus Permission"],
        subchild: [
          {
            applicationName: "Volvo Bus",
            url: pageUrl + "volvobus",
            Visible: "false",
            Permission: ["Volvo Bus Permission"],
            subchild: []
          },
          {
            applicationName: "Private Bus",
            url: pageUrl + "privatebus",
            Visible: "false",
            Permission: ["Private Bus Permission"],
            subchild: []
          }
        ],
        child: []
      }
    ]
  }
];