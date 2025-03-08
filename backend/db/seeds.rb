# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# 既存データを削除
Transaction.destroy_all

# 仮データを作成
transactions = [
  { amount: 5000, category: "食費", date: "2024-03-01", description: "ランチ" },
  { amount: 12000, category: "家賃", date: "2024-03-01", description: "家賃の支払い" },
  { amount: 3000, category: "交通費", date: "2024-03-02", description: "電車代" },
  { amount: 1500, category: "カフェ", date: "2024-03-03", description: "スターバックス" },
  { amount: 8000, category: "交際費", date: "2024-03-04", description: "飲み会" },
  { amount: 20000, category: "給料", date: "2024-03-05", description: "アルバイトの給料" },
  { amount: 6000, category: "食費", date: "2024-03-06", description: "スーパーで買い物" },
  { amount: 4000, category: "趣味", date: "2024-03-07", description: "ゲーム購入" },
  { amount: 2500, category: "医療費", date: "2024-03-08", description: "病院の診察料" },
  { amount: 1000, category: "日用品", date: "2024-03-09", description: "シャンプー" }
]

# データをデータベースに投入
transactions.each do |transaction|
  Transaction.create!(transaction)
end
