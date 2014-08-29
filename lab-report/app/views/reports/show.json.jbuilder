json.(@report, :id, :title, :objective)

json.items @report.items, partial: "reports/items", as: :item
