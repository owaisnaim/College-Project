<%@page language="java"%>
<%
String s1 =request.getParameter("Quantity");
String s2 =request.getParameter("Date");
String s3=request.getParameter("eid");
String s4 =request.getParameter("cid");
String s5 =request.getParameter("Gender");
out.write(s1);
out.write(s2);
out.write(s3);
out.write(s4);
out.write(s5);
%>
