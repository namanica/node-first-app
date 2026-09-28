export const renderHtml = (res, html) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
