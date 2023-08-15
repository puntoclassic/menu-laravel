<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "total",
        "shipping_costs",
        "is_shipping",
        "delivery_address",
        "delivery_time",
        "order_status_id",
        "note",
        "is_paid"
    ];

    public function scopeFilter($query, array $filters)
    {
        $query->when(
            $filters['search'] ?? false,
            fn ($query, $search) =>
            $query->where('id', 'like', '%' . $search . '%')
                ->orWhere('shipping_address', 'like', '%' . $search . '%')
                ->orWhereHas('user', fn ($query) => $query->where('firstname', 'like', '%' . $search . '%')->orWhere('lastname', 'like', '%' . $search . '%'))
        );
    }

    public function getFormattedPrice()
    {
        return number_format($this->total, 2);
    }


    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function order_details()
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function order_status()
    {
        return $this->belongsTo(OrderState::class, "order_status_id");
    }
}
