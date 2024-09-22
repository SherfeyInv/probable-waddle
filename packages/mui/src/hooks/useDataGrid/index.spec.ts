import { renderHook, waitFor } from "@testing-library/react";

import { MockJSONServer, TestWrapper } from "@test";

import { useDataGrid } from "./";
import { CrudFilters } from "@refinedev/core";
import { act } from "react-dom/test-utils";

describe("useDataGrid Hook", () => {
    it("controlled filtering with 'onSubmit' and 'onSearch'", async () => {
        type SearchVariables = { title: string; status: string };

        const { result } = renderHook(
            () =>
                useDataGrid<any, any, SearchVariables>({
                    resource: "posts",
                    onSearch: (values) => {
                        const filters: CrudFilters = [];

                        filters.push(
                            {
                                field: "title",
                                operator: "contains",
                                value: values.title,
                            },
                            {
                                field: "status",
                                operator: "eq",
                                value: values.status,
                            },
                        );

                        return filters;
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            expect(!result.current.tableQueryResult?.isLoading).toBeTruthy();
        });

        await act(async () => {
            result.current.search({ title: "test", status: "draft" });
        });

        expect(result.current.filters).toEqual([
            {
                field: "title",
                operator: "contains",
                value: "test",
            },
            {
                field: "status",
                operator: "eq",
                value: "draft",
            },
        ]);
        expect(result.current.current).toEqual(1);
    });

    it.each(["client", "server"] as const)(
        "when pagination mode is %s, should set pagination props in dataGridProps",
        async (mode) => {
            const { result } = renderHook(
                () =>
                    useDataGrid({
                        pagination: {
                            mode,
                        },
                    }),
                {
                    wrapper: TestWrapper({}),
                },
            );

            expect(result.current.dataGridProps).toEqual(
                expect.objectContaining({
                    paginationModel: expect.objectContaining({
                        pageSize: 25,
                        page: 0,
                    }),
                }),
            );
        },
    );

    it("when pagination mode is off, should not set pagination props in dataGridProps", async () => {
        const { result } = renderHook(
            () =>
                useDataGrid({
                    pagination: {
                        mode: "off",
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.dataGridProps).toEqual(
            expect.not.objectContaining({
                paginationModel: expect.objectContaining({
                    pageSize: 25,
                    page: 0,
                }),
            }),
        );
        expect(result.current.dataGridProps).toEqual(
            expect.objectContaining({
                paginationMode: "client",
            }),
        );
    });

    it.each(["off", "server"] as const)(
        "when filters.mode is %s, should set filterMode to %s",
        async (mode) => {
            const { result } = renderHook(
                () =>
                    useDataGrid({
                        filters: {
                            mode,
                        },
                    }),
                {
                    wrapper: TestWrapper({}),
                },
            );

            expect(result.current.dataGridProps).toEqual(
                expect.objectContaining({
                    filterMode: mode === "off" ? "client" : "server",
                }),
            );
        },
    );

    it.each(["off", "server"] as const)(
        "when sorters.mode is %s, should set sortingMode to %s",
        async (mode) => {
            const { result } = renderHook(
                () =>
                    useDataGrid({
                        sorters: {
                            mode,
                        },
                    }),
                {
                    wrapper: TestWrapper({}),
                },
            );

            expect(result.current.dataGridProps).toEqual(
                expect.objectContaining({
                    sortingMode: mode === "off" ? "client" : "server",
                }),
            );
        },
    );

    it("works correctly with `interval` and `onInterval` params", async () => {
        const onInterval = jest.fn();
        const { result } = renderHook(
            () =>
                useDataGrid({
                    resource: "posts",
                    overtimeOptions: {
                        interval: 100,
                        onInterval,
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        ...MockJSONServer,
                        getList: () => {
                            return new Promise((res) => {
                                setTimeout(
                                    () => res({ data: [], total: 2 }),
                                    1000,
                                );
                            });
                        },
                    },
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await waitFor(() => {
            expect(result.current.tableQueryResult.isLoading).toBeTruthy();
            expect(result.current.overtime.elapsedTime).toBe(900);
            expect(onInterval).toBeCalled();
        });

        await waitFor(() => {
            expect(!result.current.tableQueryResult.isLoading).toBeTruthy();
            expect(result.current.overtime.elapsedTime).toBeUndefined();
        });
    });
});
