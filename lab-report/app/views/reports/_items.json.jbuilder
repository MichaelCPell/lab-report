json._id item.id
json.title item.title
json.content item.content
json.items item.items, partial: "reports/items", as: :item if item.items.any?