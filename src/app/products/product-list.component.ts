import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string = "";
    errorMessage: string = "";
    sub!: Subscription;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        // this.listFilter = "";
        // this.products = this.productService.getProducts();
        // this.filteredProducts = this.products;
        this.sub = this.productService.getProducts().subscribe({
            next: products => this.products = products,
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    constructor(private productService: ProductService){}
    performFilter(filterBy: string): IProduct[]{
        filterBy.toLowerCase();
        return this.products.filter((product: IProduct)=> 
            product.productName.toLowerCase().includes(filterBy)
        );
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List ' + message;
    }
}