class CreateTransactions < ActiveRecord::Migration[8.0]
  def change
    create_table :transactions do |t|
      t.integer :amount
      t.string :category
      t.date :date
      t.text :description

      t.timestamps
    end
  end
end
