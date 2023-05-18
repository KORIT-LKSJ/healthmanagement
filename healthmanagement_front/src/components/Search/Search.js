/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import QueryString from "qs";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { BiSearch } from "react-icons/bi";
import SearchBar from "../../SearchBar/SearchBar";

const headerIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
`;

const Search = ({ gyms, setGyms, refresh, setRefresh }) => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState();
    const [searchParam, setSearchParam] = useState({ page: 1, searchValue: "" });
    const [lastPage, setLastPage] = useState(1);

    const searchGyms = useQuery(
        ["searchGyms"],
        async () => {
            const option = {
                params: searchParam,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                paramsSerializer: (params) => QueryString.stringify(params, { arrayFormat: "repeat" }),
            };
            const response = await axios.get("http://localhost:8080/gyms", option);
            return response;
        },
        {
            onSuccess: (response) => {
                if (refresh) {
                    setRefresh(false);
                }
                console.log(response);
                const totalCount = response.data.totalCount;
                console.log(totalCount);

                setLastPage(totalCount % 20 === 0 ? totalCount / 20 : Math.ceil(totalCount / 20));
                setGyms([...gyms, ...response.data.gymList]);
                setSearchParam({ ...searchParam, page: searchParam.page + 1 });
            },
            enabled: refresh && (searchParam.page < lastPage + 1 || lastPage === 0),
        }
    );

    if (searchGyms.isLoading) {
        return <></>;
    }

    const searchBarClickHandle = () => {
        if (!isSearchBarOpen) {
            setIsSearchBarOpen(true);
        } else {
            setIsSearchBarOpen(false);
        }
    };

    const searchInputHandle = (e) => {
        setSearchParam({ ...searchParam, page: 1, searchValue: e.target.value });
    };

    const searchSubmitHandle = (e) => {
        if (e.keyCode === 13) {
            setSearchParam({ ...searchParam, page: 1 });
            setGyms([]);
            setRefresh(true);
        }
    };
    return (
        <div>
            <div css={headerIcon} onClick={searchBarClickHandle}>
                <BiSearch />
            </div>
            <SearchBar
                isSearchBarOpen={isSearchBarOpen}
                searchInputHandle={searchInputHandle}
                searchSubmitHandle={searchSubmitHandle}
            />
        </div>
    );
};

export default Search;
