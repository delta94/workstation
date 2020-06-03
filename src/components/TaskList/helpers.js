function flattenNodes(content) {
  const flattenedContent = [];

  content.forEach((node) => {
    node.type === 'category' ? flattenedContent.push(...node.childNodes) : flattenedContent.push(node);
  });

  return flattenedContent;
}

export function calculateCompletedPercent(content) {
  const flatTasks = flattenNodes(content);
  const total = flatTasks.length;
  const completed = flatTasks.filter((node) => node.properties.isCompleted).length;
  return Math.round((completed / total) * 100);
}
