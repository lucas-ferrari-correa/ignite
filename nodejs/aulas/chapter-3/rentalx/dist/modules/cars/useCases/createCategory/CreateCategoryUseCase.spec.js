"use strict";

var _CategoriesRepositoryInMemory = require("@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory");

var _AppError = require("@shared/errors/AppError");

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

let createCategoryUseCase;
let categoriesRepositoryInMemory;
describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new _CategoriesRepositoryInMemory.CategoriesRepositoryInMemory();
    createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
  });
  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test"
    };
    await createCategoryUseCase.execute({ ...category
    });
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toHaveProperty("id");
  });
  it("should not be able to create an existing category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test"
    };
    await createCategoryUseCase.execute({ ...category
    });
    await expect(createCategoryUseCase.execute({ ...category
    })).rejects.toEqual(new _AppError.AppError("Category already exists"));
  });
});