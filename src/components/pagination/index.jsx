// import React, { Component } from "react";
// import styles from "./styles.less";
// const pageSize = 20;
// export default class Pagination extends Component {
//     render() {
//         const { pages = 10, href = "", query = "" } = this.props;
//         const page = Math.ceil(pages / pageSize);
//         const pagesAyy = [];
//         if (pages > 0) {
//             for (let i = 0; i < page; i++) {
//                 pagesAyy.push(i);
//             }
//         }
//         let { page: currentPage = 1 } = query;
//         currentPage = Number(currentPage);

//         return (
//             pages > pageSize && (
//                 <div className={styles.pagination}>
//                     {currentPage > 1 ? (
//                         <a className={styles.prev}>上一页</a>
//                     ) : null}

//                     {page > 10
//                         ? pagesAyy.map((item, index) => {
//                               const vPage = item + 1; //当前页码
//                               const abs = Math.abs(currentPage - vPage);
//                               return abs < 3 || vPage == 1 || vPage == page ? (
//                                   <Link
//                                       key={item}
//                                       href={{
//                                           pathname: href,
//                                           query: { ...query, page: vPage }
//                                       }}
//                                   >
//                                       <a
//                                           className={`${styles.page_item}${
//                                               currentPage == vPage
//                                                   ? " " + styles.currentPage
//                                                   : ""
//                                           }`}
//                                       >
//                                           {vPage}
//                                       </a>
//                                   </Link>
//                               ) : abs == 3 ? (
//                                   <Link
//                                       key={item}
//                                       href={{
//                                           pathname: href,
//                                           query: {
//                                               ...query,
//                                               page:
//                                                   currentPage > vPage
//                                                       ? currentPage == 5
//                                                           ? currentPage - 3
//                                                           : currentPage - 5
//                                                       : currentPage == page - 4
//                                                       ? currentPage + 3
//                                                       : currentPage + 5
//                                           }
//                                       }}
//                                   >
//                                       <a className={`${styles.page_item}`}>
//                                           ···
//                                       </a>
//                                   </Link>
//                               ) : null;
//                           })
//                         : pagesAyy.map((item, index) => {
//                               const vPage = item + 1; //当前页码
//                               return (
//                                   <Link
//                                       key={item}
//                                       href={{
//                                           pathname: href,
//                                           query: { ...query, page: vPage }
//                                       }}
//                                   >
//                                       <a
//                                           className={`${styles.page_item}${
//                                               currentPage == vPage
//                                                   ? " " + styles.currentPage
//                                                   : ""
//                                           }`}
//                                       >
//                                           {vPage}
//                                       </a>
//                                   </Link>
//                               );
//                           })}
//                     {currentPage < page ? (
//                         <Link
//                             href={{
//                                 pathname: href,
//                                 query: {
//                                     ...query,
//                                     page: Number(currentPage) + 1
//                                 }
//                             }}
//                         >
//                             <a className={styles.next}>下一页</a>
//                         </Link>
//                     ) : (
//                         <a className={styles.dis_page}>下一页</a>
//                     )}
//                 </div>
//             )
//         );
//     }
// }
