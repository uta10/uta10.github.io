var webmaps =
[
  ["Duke Energy Outage Map", "https://outagemap.duke-energy.com/#/current-outages/fl",
  "Duke Energy's outage map helps customers in Florida, Ohio, Kentucky, Indiana, and the Carolinas locate power outages and view information such as the cause, number of people affected, outage time, status, and estimated restoration time. The map uses GIS functionalities including spatial visualization, spatial analysis, and attribute information to provide details about outages within Duke Energy's service areas."],
  ["OpenStreetMap", "https://www.openstreetmap.org/#map=4/38.01/-95.84",
"The primary purpose of OpenStreetMap was to create a free, editable map of the world. It was started in the UK out of frustration with the lack of good map data that was freely available to use. OpenStreetMap has many strengths, including being open-source, collaborative, and having low barriers to contributing information."]
];
//A prompt box is used to prompt users to input a value before entering a page.
 //user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
  }
  function webmap_table()
  {
    document.write("<table width=100%>");
    for (var row=0; row < webmaps.length; row++)
    {
      document.write("<tr>");
      for (var column=0; column < webmaps[0].length; column++)
      {
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
      document.write("</tr>");
    }
    document.write("</table>");
    return ""
  }
