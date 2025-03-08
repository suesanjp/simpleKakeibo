class TransactionsController < ApplicationController
  before_action :set_transaction, only: [ :destroy ]

  def index
    transactions = Transaction.all.order(date: :desc)
    render json: transactions
  end

  def create
    transaction = Transaction.new(transaction_params)
    if transaction.save
      render json: transaction, status: :created
    else
      render json: transaction.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @transaction.destroy
    head :no_content
  end

  private

  def set_transaction
    @transaction = Transaction.find(params[:id])
  end

  def transaction_params
    params.require(:transaction).permit(:amount, :category, :date, :description)
  end
end
