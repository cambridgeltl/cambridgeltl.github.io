const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/people"],
    exact: true,
    component: "People",
  },
  {
    path: ["/research"],
    exact: true,
    component: "Research",
  },
  {
    path: ["/student_project"],
    exact: true,
    component: "StudentProject",
  },
  {
    path: ["/seminar"],
    exact: true,
    component: "Seminar",
  },
  {
    path: ["/resource"],
    exact: true,
    component: "Resource",
  },
  {
    path: ["/news"],
    exact: true,
    component: "News",
  }
];

export default routes;
