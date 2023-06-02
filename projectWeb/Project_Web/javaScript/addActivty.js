function addTable(ideaName, selectActivity, textarea){
    let getTable = document.getElementById(table)
    let idea = document.getElementById(idea-name)    
    let area = document.getElementById(textarea)
    let select = document.getElementById(selectActivity)
    let arrayTable = new array(getTable);

    function check(){
        if (select == Activity){
            arrayTable.
        }
    }

    function PrintArray() {
        document.write("<table border=1 bgcolor=Black width='500' cellpadding='2' cellspacing='1'>");
        document.write("<tr>", "<th style='color:white;text-align:left;' bgcolor=Black >", "Index", "</th>", "<th style='color:white;text-align:left;' bgcolor = Black > ","Value","</th > ","</tr > ");
        for (var i = 0; i < arrayTable.length; i++)
            document.write("<tr>", "<td bgcolor=Gray >", i, "</td>", "<td bgcolor=Gray>", arrayTable[i], "</td>", "</tr>");
        document.write("</table>");
    }

    document.write("<b> Array n1:</b>", "<br><br>");

    PrintArray();

    document.write("<br>", "<br>");
    document.write("<b> Array n2:</b>");
    document.write("<br>", "<br>");
    PrintArray();

}