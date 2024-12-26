import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  clothes: IProduct[] = [
    {
      img: "https://s3-alpha-sig.figma.com/img/ab39/8e6b/33c986caa3b4ea17ceea8da265d55777?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpbPNIMyVro3x~tnvm3JgtcGd6hF4xc57N1vwqw10rClz3yytskpIlRTOh4CdqMH3BLT98flF5O72i~Q5SzH7aZhlj2vspaE145c7xVjMHtgQwr~Gxv-k1Cd13AD7z04SkhNJAddZJFVvDrc7PmXRXwVzpyKdaEf-Lk8FSrqTCzraMo4XT-v5DCAdBXL870v~VHeJAgEeXkCKEp9Rd7ktyZbL2vLzn7fuU0ro~xBD-T5GA6nCDSavtfRlM7Ft8xvTUwOHTEP3aBfgPPQKfqgaNwVvRovQQy28CCi07uBfeaIXrkOdoBfKpfBpY4NHKzVv8XeENXX4CNTHV6nz0D~Hw__",
      id: 1,
      size: ['s', 'm', 'l'],
      color: ['Red', 'purple'],
      inStock: true,
      fabrick: ['Cotton', 'Polyester'],
      price: 29.99,
      title: 'Casual T-Shirt',
      description: 'A comfortable and casual red t-shirt for everyday wear.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b712/7e29/04fc0e2293c8f0b5842d87c7fee59f28?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EOpMFCXUHymNeN8XgYvls5gOD5hYzwHVt67X-azhbI~Eup3r3vVYLgijdjKJbg2QPxfkaU-maPyd1MuE0-uOu7MnqctSMm-qCWymhTAOjRvDJhcbEABLEoPGucbkd1fah1xp~LOMtFoHiGzFj2r6cR4ICBqAbxabYlpyyDoTPLk00QH3M5SWlT-QpS~CPh0yswiaBF6I156J5D6aIbugSb9GW0cCcvdGZrDfirQPVTho5pW8Or5pkSATpj6k2ETdRBYynvTqgpaSWb3blYn85y1DtSV~mi3Ivi3~TOfMDLuxQUbfZQiU79uVAjMwsnKyBlrIh92c6KBFa34Iq1eVdA__",
      id: 2,
      size: ['m', 'l', 'xl'],
      color: ['Red', 'blue', 'yellow'],
      inStock: true,
      fabrick: ['Denim'],
      price: 49.99,
      title: 'Denim Jacket',
      description: 'A stylish blue denim jacket, perfect for layering.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/6f04/e9eb/d1fa32f2005a099e5903aa4bdbe0ba45?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i~WBEuNk0-JkfMJAdpb17E6ekxpmMxJmHS~pZr3xhO-7d9p90RBtQ7mOOjrV3Pp3DQYfwbS3n3WXNYq6jFMCGjzZt3k6UGD6S88YuIdY7OYn8krPpW2U03K4Halh0y9h7QVGgb6p6oJmFchpW7p6i52gV7OSm~rXedH~YhtWZQ2MhGb55SjkB8ik5o8XHCGASLkOBW67oV6jnD9yQKpLnLyXcUvq17Vqx1BaS4DVs09jLuzaWrqtnvQ0fIkVxKN2riFvx7N3ESO9gJVfWFpP-P4w69fzlns8s1E6Cd3aZpsosi03TokoilgZoJAkUld7y2Nul2sy-qdkgVHUEiVe-A__",
      id: 3,
      size: ['xs', 's'],
      color: ['Red', 'blue', "green"],
      inStock: false,
      fabrick: ['Wool'],
      price: 89.99,
      title: 'Wool Sweater',
      description: 'A cozy black wool sweater to keep you warm.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fd7e/7536/4adf48f49dd79988a401e9c091117a6d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6ZYyv8r-513izwAMV47WrxEOs6UoaNk9MzIiNLIAPQERJkZyIrXX2VHr9D8qGCA5in8PmYCd4lsm-cXIVgJm72FJANtxEhVINZuACzR2WIIIKJpN9W0hUbYbXVMaxsRDNagCsnKve-7dz8MNZw8Bie1nPvKAaxFbN-bHGSfakd93NkNMn0Vqk7YoZg23i91EM~pOB87e06IU0RIpzLUmz0OMvAfv79XrYZa8FK-QdicC0WFrf9FWi0YGPjkePNqHseGfMb9E8YqIxx2TO4091Dxc82jgxv7wXTNTDLw6vglutOX6IHO60zXf6Y9~pItYEQFpdsMvDdarJeq1A~sxg__",
      id: 4,
      size: ['xs', 's', 'm'],
      color: ['Red', 'blue'],
      inStock: true,
      fabrick: ['Cotton', 'Spandex'],
      price: 39.99,
      title: 'Sporty Tank Top',
      description: 'A green sporty tank top with breathable fabric.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fd7e/7536/4adf48f49dd79988a401e9c091117a6d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6ZYyv8r-513izwAMV47WrxEOs6UoaNk9MzIiNLIAPQERJkZyIrXX2VHr9D8qGCA5in8PmYCd4lsm-cXIVgJm72FJANtxEhVINZuACzR2WIIIKJpN9W0hUbYbXVMaxsRDNagCsnKve-7dz8MNZw8Bie1nPvKAaxFbN-bHGSfakd93NkNMn0Vqk7YoZg23i91EM~pOB87e06IU0RIpzLUmz0OMvAfv79XrYZa8FK-QdicC0WFrf9FWi0YGPjkePNqHseGfMb9E8YqIxx2TO4091Dxc82jgxv7wXTNTDLw6vglutOX6IHO60zXf6Y9~pItYEQFpdsMvDdarJeq1A~sxg__",
      id: 5,
      size: ['l', 'xl'],
      color: ['Red', 'lightblue'],
      inStock: true,
      fabrick: ['Linen'],
      price: 59.99,
      title: 'Formal Shirt',
      description: 'A crisp white formal shirt suitable for office wear.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fd7e/7536/4adf48f49dd79988a401e9c091117a6d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6ZYyv8r-513izwAMV47WrxEOs6UoaNk9MzIiNLIAPQERJkZyIrXX2VHr9D8qGCA5in8PmYCd4lsm-cXIVgJm72FJANtxEhVINZuACzR2WIIIKJpN9W0hUbYbXVMaxsRDNagCsnKve-7dz8MNZw8Bie1nPvKAaxFbN-bHGSfakd93NkNMn0Vqk7YoZg23i91EM~pOB87e06IU0RIpzLUmz0OMvAfv79XrYZa8FK-QdicC0WFrf9FWi0YGPjkePNqHseGfMb9E8YqIxx2TO4091Dxc82jgxv7wXTNTDLw6vglutOX6IHO60zXf6Y9~pItYEQFpdsMvDdarJeq1A~sxg__",
      id: 6,
      size: ['xs', 's', 'm', 'l'],
      color: ['Red', 'blue'],
      inStock: true,
      fabrick: ['Silk'],
      price: 99.99,
      title: 'Silk Blouse',
      description: 'A luxurious yellow silk blouse with a smooth finish.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fd7e/7536/4adf48f49dd79988a401e9c091117a6d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6ZYyv8r-513izwAMV47WrxEOs6UoaNk9MzIiNLIAPQERJkZyIrXX2VHr9D8qGCA5in8PmYCd4lsm-cXIVgJm72FJANtxEhVINZuACzR2WIIIKJpN9W0hUbYbXVMaxsRDNagCsnKve-7dz8MNZw8Bie1nPvKAaxFbN-bHGSfakd93NkNMn0Vqk7YoZg23i91EM~pOB87e06IU0RIpzLUmz0OMvAfv79XrYZa8FK-QdicC0WFrf9FWi0YGPjkePNqHseGfMb9E8YqIxx2TO4091Dxc82jgxv7wXTNTDLw6vglutOX6IHO60zXf6Y9~pItYEQFpdsMvDdarJeq1A~sxg__",
      id: 7,
      size: ['m', 'l', 'xl'],
      color: ['Red', 'blue'],
      inStock: false,
      fabrick: ['Polyester'],
      price: 24.99,
      title: 'Workout Shorts',
      description: 'Grey workout shorts designed for maximum flexibility.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fd7e/7536/4adf48f49dd79988a401e9c091117a6d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6ZYyv8r-513izwAMV47WrxEOs6UoaNk9MzIiNLIAPQERJkZyIrXX2VHr9D8qGCA5in8PmYCd4lsm-cXIVgJm72FJANtxEhVINZuACzR2WIIIKJpN9W0hUbYbXVMaxsRDNagCsnKve-7dz8MNZw8Bie1nPvKAaxFbN-bHGSfakd93NkNMn0Vqk7YoZg23i91EM~pOB87e06IU0RIpzLUmz0OMvAfv79XrYZa8FK-QdicC0WFrf9FWi0YGPjkePNqHseGfMb9E8YqIxx2TO4091Dxc82jgxv7wXTNTDLw6vglutOX6IHO60zXf6Y9~pItYEQFpdsMvDdarJeq1A~sxg__",
      id: 8,
      size: ['xs', 's', 'm', 'l', 'xl'],
      color: ['Red', 'blue'],
      inStock: true,
      fabrick: ['Cotton', 'Rayon'],
      price: 19.99,
      title: 'Graphic Tee',
      description: 'A trendy pink graphic tee with a modern print.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/fd7e/7536/4adf48f49dd79988a401e9c091117a6d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6ZYyv8r-513izwAMV47WrxEOs6UoaNk9MzIiNLIAPQERJkZyIrXX2VHr9D8qGCA5in8PmYCd4lsm-cXIVgJm72FJANtxEhVINZuACzR2WIIIKJpN9W0hUbYbXVMaxsRDNagCsnKve-7dz8MNZw8Bie1nPvKAaxFbN-bHGSfakd93NkNMn0Vqk7YoZg23i91EM~pOB87e06IU0RIpzLUmz0OMvAfv79XrYZa8FK-QdicC0WFrf9FWi0YGPjkePNqHseGfMb9E8YqIxx2TO4091Dxc82jgxv7wXTNTDLw6vglutOX6IHO60zXf6Y9~pItYEQFpdsMvDdarJeq1A~sxg__",
      id: 9,
      size: ['s', 'm', 'l'],
      color: ['Red', 'blue'],
      inStock: true,
      fabrick: ['Denim', 'Spandex'],
      price: 69.99,
      title: 'Slim Fit Jeans',
      description: 'Navy blue slim fit jeans with a comfortable stretch.',
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/2dea/2cb4/1813051eaa14e2626579d059154752e5?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dr4BvnUWNrLCbRmaQ8XaOnVyVfRrXo7Ljm834VsatTcRL5i6NZ2nRyUSZAnIXiMqAYqltyULR6ngK8dwd6T42Oj100~lNFcdM0xiFgYtZzW7W-SuENGBUdhkhWFqyT9EQWJ9aXeL~XPqmCmkSCPeadwHJAUME9kaoXwIf3lxKGuSE4pxCkQSgf17qsahDKcL0G~V-oQgRquLBmKQ3oPyb4MuL6eS7JmpLr-d8KG~QRLcGQ6suySo8am9Rjg7uWLg9lpcPWjk4CtXkyCcYEkaFvw3nnFsP2r2sXq40zcMaLPgCN9d7pl9iIeLBLEiOvRDxrNNOTcQDM-4oB1Yh-Hmaw__",
      id: 10,
      size: ['xs', 's', 'm', 'l', 'xl'],
      color: ['Red', 'blue'],
      inStock: false,
      fabrick: ['Leather'],
      price: 149.99,
      title: 'Leather Jacket',
      description: 'A premium brown leather jacket with a classic design.',
    },
  ];
  constructor() { }

  getAllProducts(): IProduct[] {
    return this.clothes;
  }

  getPorductById(id: number): IProduct | undefined {
    return this.clothes.find(c => c.id === id);
  }
}
