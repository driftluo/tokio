window.BENCHMARK_DATA = {
  "lastUpdate": 1621400681282,
  "repoUrl": "https://github.com/driftluo/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314959564,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1019,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14559,
            "range": "± 3929",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1045,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14917,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 34",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324749506,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 924,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15161,
            "range": "± 4086",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 874,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14986,
            "range": "± 4366",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549190558,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1052,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16954,
            "range": "± 8337",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1096,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14894,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 611,
            "range": "± 25",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558676197,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1058,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15094,
            "range": "± 3743",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1022,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14201,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 545,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559893134,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 981,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15833,
            "range": "± 8715",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1067,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16713,
            "range": "± 13609",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348676,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1005,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13752,
            "range": "± 3698",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 927,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13180,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 541,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636002716,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 905,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15309,
            "range": "± 5774",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 954,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15280,
            "range": "± 6096",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 523,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725012703,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 913,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14214,
            "range": "± 4731",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 922,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15159,
            "range": "± 5870",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 487,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605731980234,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 751,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12495,
            "range": "± 3795",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 821,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12921,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 471,
            "range": "± 120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852495335,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1026,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17561,
            "range": "± 5098",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1069,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16640,
            "range": "± 8681",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 554,
            "range": "± 107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896461076,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 851,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13799,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 869,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14280,
            "range": "± 5421",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artem@vorotnikov.me",
            "name": "Artem Vorotnikov",
            "username": "vorot93"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130",
          "message": "Suppress deprecated warnings for spin_loop_hint (#3497)\n\n* Suppress deprecated warnings for spin_loop_hint\n\n* Update tokio/src/loom/std/mod.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* Update tokio/src/sync/task/atomic_waker.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* fmt\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>",
          "timestamp": "2021-02-01T15:55:21+03:00",
          "tree_id": "effd8bf970f9044cf0ebe0b3cd8446b297b3efc8",
          "url": "https://github.com/driftluo/tokio/commit/cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130"
        },
        "date": 1612253961556,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1028,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16057,
            "range": "± 3959",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1046,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15240,
            "range": "± 3837",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28d68798973fbfaab889d73c4da7cbc2d5a0e2f8",
          "message": "macros: forward input arguments in `#[tokio::test]` (#3691)\n\nFixes #2388\r\n\r\nPreviously `#[tokio::test]` would error on functions that took\r\narguments. That meant other attribute macros couldn't do further\r\ntransformations on them. This changes that so arguments are forwarded as\r\nis.\r\n\r\nWhatever else might be included on the function is forwarded as well.\r\nFor example return type, generics, etc.\r\n\r\nWorth noting that this is only for compatibility with other macros.\r\n`#[test]`s that take arguments will still fail to compile.\r\n\r\nA bit odd that [trybuild] tests don't fail `#[test]` functions with\r\narguments which is why the new tests are run with `t.pass(...)`. They do\r\nactually fail if part of a real crate.\r\n\r\n[trybuild]: https://crates.io/crates/trybuild",
          "timestamp": "2021-04-11T20:39:05+02:00",
          "tree_id": "c50965c227bfc40bef8ff305d46f85318e04397d",
          "url": "https://github.com/driftluo/tokio/commit/28d68798973fbfaab889d73c4da7cbc2d5a0e2f8"
        },
        "date": 1618197878596,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 759,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13760,
            "range": "± 5185",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 806,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13938,
            "range": "± 6662",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 464,
            "range": "± 111",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vilscrolls@gmail.com",
            "name": "Aaron Taner",
            "username": "mapkts"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28",
          "message": "doc: fix invalid `#[doc(inline)]` warnings on latest nightly. (#3788)\n\nThis commit fixed issue #3787 by removing [doc(inline)] from\r\nmacro `cfg_macros` and added proper #[doc(inline)] attributes\r\nto `pub use` items inside `cfg_macros` calls.\r\n\r\nIt's probably not `cfg_macros`s responsibility to inlining public\r\nmacros, though it's conveninent to do so. Notice that in lib.rs:\r\n\r\ncfg_macros! {\r\n    /// Implementation detail of the `select!` macro. This macro is **not**\r\n    /// intended to be used as part of the public API and is permitted to\r\n    /// change.\r\n    #[doc(hidden)]\r\n    pub use tokio_macros::select_priv_declare_output_enum;\r\n\r\n    ...\r\n}\r\n\r\n`#[doc(hidden)]` and `#[doc(inline)]` are conflict with each other\r\nin the sense of correctness.\r\n\r\nFixes: #3787",
          "timestamp": "2021-05-18T01:28:17+09:00",
          "tree_id": "f36e7c741f022d48d4aed5da9c8b297dd57dfb45",
          "url": "https://github.com/driftluo/tokio/commit/ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28"
        },
        "date": 1621400674424,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 854,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14603,
            "range": "± 4812",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 850,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13850,
            "range": "± 4652",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 580,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314974927,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199046,
            "range": "± 55572",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 760862,
            "range": "± 157394",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5490742,
            "range": "± 748448",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20486755,
            "range": "± 2300375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324750921,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 178128,
            "range": "± 14270",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 707946,
            "range": "± 48048",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5326109,
            "range": "± 635423",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19949182,
            "range": "± 3024767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549203912,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182327,
            "range": "± 35912",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 649727,
            "range": "± 102719",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4047012,
            "range": "± 839128",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18946145,
            "range": "± 2027569",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558645947,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191217,
            "range": "± 14072",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 710720,
            "range": "± 43091",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5226983,
            "range": "± 533736",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19521931,
            "range": "± 2271038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559892943,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191688,
            "range": "± 39550",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 724625,
            "range": "± 52874",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5279089,
            "range": "± 569953",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21143658,
            "range": "± 1850531",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348602,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179160,
            "range": "± 73737",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 618494,
            "range": "± 150449",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4766918,
            "range": "± 1107083",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19012569,
            "range": "± 4448367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636009065,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 214451,
            "range": "± 25711",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 790044,
            "range": "± 167979",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5645160,
            "range": "± 704481",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22209149,
            "range": "± 3825346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725037410,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 208313,
            "range": "± 45110",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 736590,
            "range": "± 151516",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5234403,
            "range": "± 831789",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20304040,
            "range": "± 2144433",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732017041,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195866,
            "range": "± 16539",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 727582,
            "range": "± 199697",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5428466,
            "range": "± 908457",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20820491,
            "range": "± 4055596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852489821,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 189192,
            "range": "± 8967",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 702064,
            "range": "± 44051",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5500810,
            "range": "± 1053690",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20865377,
            "range": "± 2857375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896473214,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194070,
            "range": "± 27873",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 694259,
            "range": "± 87017",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5250419,
            "range": "± 1213331",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19153793,
            "range": "± 2780219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artem@vorotnikov.me",
            "name": "Artem Vorotnikov",
            "username": "vorot93"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130",
          "message": "Suppress deprecated warnings for spin_loop_hint (#3497)\n\n* Suppress deprecated warnings for spin_loop_hint\n\n* Update tokio/src/loom/std/mod.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* Update tokio/src/sync/task/atomic_waker.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* fmt\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>",
          "timestamp": "2021-02-01T15:55:21+03:00",
          "tree_id": "effd8bf970f9044cf0ebe0b3cd8446b297b3efc8",
          "url": "https://github.com/driftluo/tokio/commit/cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130"
        },
        "date": 1612253983101,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158811,
            "range": "± 2820",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 627096,
            "range": "± 20864",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4977902,
            "range": "± 926308",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18330475,
            "range": "± 3027058",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28d68798973fbfaab889d73c4da7cbc2d5a0e2f8",
          "message": "macros: forward input arguments in `#[tokio::test]` (#3691)\n\nFixes #2388\r\n\r\nPreviously `#[tokio::test]` would error on functions that took\r\narguments. That meant other attribute macros couldn't do further\r\ntransformations on them. This changes that so arguments are forwarded as\r\nis.\r\n\r\nWhatever else might be included on the function is forwarded as well.\r\nFor example return type, generics, etc.\r\n\r\nWorth noting that this is only for compatibility with other macros.\r\n`#[test]`s that take arguments will still fail to compile.\r\n\r\nA bit odd that [trybuild] tests don't fail `#[test]` functions with\r\narguments which is why the new tests are run with `t.pass(...)`. They do\r\nactually fail if part of a real crate.\r\n\r\n[trybuild]: https://crates.io/crates/trybuild",
          "timestamp": "2021-04-11T20:39:05+02:00",
          "tree_id": "c50965c227bfc40bef8ff305d46f85318e04397d",
          "url": "https://github.com/driftluo/tokio/commit/28d68798973fbfaab889d73c4da7cbc2d5a0e2f8"
        },
        "date": 1618197889620,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 151186,
            "range": "± 17637",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 583555,
            "range": "± 62725",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4614243,
            "range": "± 1276978",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18772127,
            "range": "± 4190778",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vilscrolls@gmail.com",
            "name": "Aaron Taner",
            "username": "mapkts"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28",
          "message": "doc: fix invalid `#[doc(inline)]` warnings on latest nightly. (#3788)\n\nThis commit fixed issue #3787 by removing [doc(inline)] from\r\nmacro `cfg_macros` and added proper #[doc(inline)] attributes\r\nto `pub use` items inside `cfg_macros` calls.\r\n\r\nIt's probably not `cfg_macros`s responsibility to inlining public\r\nmacros, though it's conveninent to do so. Notice that in lib.rs:\r\n\r\ncfg_macros! {\r\n    /// Implementation detail of the `select!` macro. This macro is **not**\r\n    /// intended to be used as part of the public API and is permitted to\r\n    /// change.\r\n    #[doc(hidden)]\r\n    pub use tokio_macros::select_priv_declare_output_enum;\r\n\r\n    ...\r\n}\r\n\r\n`#[doc(hidden)]` and `#[doc(inline)]` are conflict with each other\r\nin the sense of correctness.\r\n\r\nFixes: #3787",
          "timestamp": "2021-05-18T01:28:17+09:00",
          "tree_id": "f36e7c741f022d48d4aed5da9c8b297dd57dfb45",
          "url": "https://github.com/driftluo/tokio/commit/ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28"
        },
        "date": 1621400661148,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 187606,
            "range": "± 27995",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 668503,
            "range": "± 93367",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4571660,
            "range": "± 965952",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19372846,
            "range": "± 2676851",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314979788,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13595,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 916,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 548,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13431,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 916,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324754941,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13492,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 950,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 611,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13849,
            "range": "± 3588",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 956,
            "range": "± 196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549191489,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15074,
            "range": "± 3954",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1104,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 639,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15715,
            "range": "± 5843",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1077,
            "range": "± 260",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558672781,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16250,
            "range": "± 6549",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1148,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 642,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16877,
            "range": "± 5879",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1120,
            "range": "± 177",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559887160,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14761,
            "range": "± 6659",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1111,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 572,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14899,
            "range": "± 6462",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1040,
            "range": "± 180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570353023,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17403,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1046,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 596,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17072,
            "range": "± 5572",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1016,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605635995329,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14052,
            "range": "± 2557",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1066,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 635,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14784,
            "range": "± 3824",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1064,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725013037,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16289,
            "range": "± 6362",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 641,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14883,
            "range": "± 4548",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1141,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732024626,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15022,
            "range": "± 5746",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1023,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 610,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14804,
            "range": "± 4029",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1050,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504046,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15976,
            "range": "± 6358",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1140,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 657,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16059,
            "range": "± 4105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1126,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896460411,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 19438,
            "range": "± 3548",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 774,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 504,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18618,
            "range": "± 5481",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 886,
            "range": "± 362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artem@vorotnikov.me",
            "name": "Artem Vorotnikov",
            "username": "vorot93"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130",
          "message": "Suppress deprecated warnings for spin_loop_hint (#3497)\n\n* Suppress deprecated warnings for spin_loop_hint\n\n* Update tokio/src/loom/std/mod.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* Update tokio/src/sync/task/atomic_waker.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* fmt\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>",
          "timestamp": "2021-02-01T15:55:21+03:00",
          "tree_id": "effd8bf970f9044cf0ebe0b3cd8446b297b3efc8",
          "url": "https://github.com/driftluo/tokio/commit/cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130"
        },
        "date": 1612253953341,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13238,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 913,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 544,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13616,
            "range": "± 2317",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 913,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28d68798973fbfaab889d73c4da7cbc2d5a0e2f8",
          "message": "macros: forward input arguments in `#[tokio::test]` (#3691)\n\nFixes #2388\r\n\r\nPreviously `#[tokio::test]` would error on functions that took\r\narguments. That meant other attribute macros couldn't do further\r\ntransformations on them. This changes that so arguments are forwarded as\r\nis.\r\n\r\nWhatever else might be included on the function is forwarded as well.\r\nFor example return type, generics, etc.\r\n\r\nWorth noting that this is only for compatibility with other macros.\r\n`#[test]`s that take arguments will still fail to compile.\r\n\r\nA bit odd that [trybuild] tests don't fail `#[test]` functions with\r\narguments which is why the new tests are run with `t.pass(...)`. They do\r\nactually fail if part of a real crate.\r\n\r\n[trybuild]: https://crates.io/crates/trybuild",
          "timestamp": "2021-04-11T20:39:05+02:00",
          "tree_id": "c50965c227bfc40bef8ff305d46f85318e04397d",
          "url": "https://github.com/driftluo/tokio/commit/28d68798973fbfaab889d73c4da7cbc2d5a0e2f8"
        },
        "date": 1618197890577,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16562,
            "range": "± 5324",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1128,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 640,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16407,
            "range": "± 4781",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1158,
            "range": "± 178",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vilscrolls@gmail.com",
            "name": "Aaron Taner",
            "username": "mapkts"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28",
          "message": "doc: fix invalid `#[doc(inline)]` warnings on latest nightly. (#3788)\n\nThis commit fixed issue #3787 by removing [doc(inline)] from\r\nmacro `cfg_macros` and added proper #[doc(inline)] attributes\r\nto `pub use` items inside `cfg_macros` calls.\r\n\r\nIt's probably not `cfg_macros`s responsibility to inlining public\r\nmacros, though it's conveninent to do so. Notice that in lib.rs:\r\n\r\ncfg_macros! {\r\n    /// Implementation detail of the `select!` macro. This macro is **not**\r\n    /// intended to be used as part of the public API and is permitted to\r\n    /// change.\r\n    #[doc(hidden)]\r\n    pub use tokio_macros::select_priv_declare_output_enum;\r\n\r\n    ...\r\n}\r\n\r\n`#[doc(hidden)]` and `#[doc(inline)]` are conflict with each other\r\nin the sense of correctness.\r\n\r\nFixes: #3787",
          "timestamp": "2021-05-18T01:28:17+09:00",
          "tree_id": "f36e7c741f022d48d4aed5da9c8b297dd57dfb45",
          "url": "https://github.com/driftluo/tokio/commit/ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28"
        },
        "date": 1621400671721,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14183,
            "range": "± 3834",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 913,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 636,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15468,
            "range": "± 4363",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 951,
            "range": "± 153",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314997643,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6701051,
            "range": "± 1798407",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6357946,
            "range": "± 1969273",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6190077,
            "range": "± 1989686",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 588,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 645,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 48623,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 901,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1057858,
            "range": "± 197528",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 768305,
            "range": "± 105579",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324759979,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6516564,
            "range": "± 2673764",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6603280,
            "range": "± 1010301",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5967313,
            "range": "± 2223714",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 604,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 606,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45361,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 835,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1120543,
            "range": "± 16131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 800918,
            "range": "± 22116",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549207449,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6803300,
            "range": "± 2440677",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6651924,
            "range": "± 1480231",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6405364,
            "range": "± 2450565",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 668,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 667,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 667,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50192,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 799,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1118325,
            "range": "± 21375",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 816811,
            "range": "± 316994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558683599,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6754053,
            "range": "± 2766922",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6486377,
            "range": "± 1920826",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6544483,
            "range": "± 3004414",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 834,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 842,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 845,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 57023,
            "range": "± 7455",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1048,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1072969,
            "range": "± 131055",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 764003,
            "range": "± 148570",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559901295,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5738427,
            "range": "± 2801992",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5782978,
            "range": "± 1550441",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 4938344,
            "range": "± 2609337",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 646,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 616,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 656,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52459,
            "range": "± 9246",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 787,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 876850,
            "range": "± 128609",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 630049,
            "range": "± 83042",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570390864,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7194053,
            "range": "± 2331201",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6928458,
            "range": "± 1519084",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6464793,
            "range": "± 2430089",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 923,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 911,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 920,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66036,
            "range": "± 6878",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1092,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1172665,
            "range": "± 151747",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 792689,
            "range": "± 98126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636006243,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6386215,
            "range": "± 2561315",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6223133,
            "range": "± 1216930",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5641856,
            "range": "± 2812615",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 782,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 771,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 748,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56412,
            "range": "± 10956",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 968,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1047860,
            "range": "± 157168",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 699818,
            "range": "± 128883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725015672,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6265900,
            "range": "± 1903787",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5980619,
            "range": "± 1425562",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5608356,
            "range": "± 1837833",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 553,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 551,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 551,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 32381,
            "range": "± 3229",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 747,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 952719,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 690909,
            "range": "± 15989",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732057947,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6429590,
            "range": "± 1921395",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6087351,
            "range": "± 1216119",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5570765,
            "range": "± 1754220",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 494,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 489,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 518,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 39959,
            "range": "± 4920",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 720,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 973766,
            "range": "± 210658",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 681859,
            "range": "± 151210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504276,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6976499,
            "range": "± 2320668",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7088300,
            "range": "± 1690727",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6373230,
            "range": "± 2466055",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 805,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49997,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 871,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1147945,
            "range": "± 6018",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 836883,
            "range": "± 6205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896470436,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6396651,
            "range": "± 2089250",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6210787,
            "range": "± 1599888",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5777463,
            "range": "± 2201398",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 876,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 879,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 877,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 55799,
            "range": "± 2028",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1076,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1092314,
            "range": "± 31319",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 774222,
            "range": "± 43076",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artem@vorotnikov.me",
            "name": "Artem Vorotnikov",
            "username": "vorot93"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130",
          "message": "Suppress deprecated warnings for spin_loop_hint (#3497)\n\n* Suppress deprecated warnings for spin_loop_hint\n\n* Update tokio/src/loom/std/mod.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* Update tokio/src/sync/task/atomic_waker.rs\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>\n\n* fmt\n\nCo-authored-by: Taiki Endo <te316e89@gmail.com>",
          "timestamp": "2021-02-01T15:55:21+03:00",
          "tree_id": "effd8bf970f9044cf0ebe0b3cd8446b297b3efc8",
          "url": "https://github.com/driftluo/tokio/commit/cc97fb8a5ff6ef17f6dc9968fbbe67002cff4130"
        },
        "date": 1612253976253,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6090247,
            "range": "± 2894885",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5901407,
            "range": "± 1653751",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5740261,
            "range": "± 1848826",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 560,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 561,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 561,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 69156,
            "range": "± 4424",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1258,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 969249,
            "range": "± 4030",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 703753,
            "range": "± 16081",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.pdrsn@gmail.com",
            "name": "David Pedersen",
            "username": "davidpdrsn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28d68798973fbfaab889d73c4da7cbc2d5a0e2f8",
          "message": "macros: forward input arguments in `#[tokio::test]` (#3691)\n\nFixes #2388\r\n\r\nPreviously `#[tokio::test]` would error on functions that took\r\narguments. That meant other attribute macros couldn't do further\r\ntransformations on them. This changes that so arguments are forwarded as\r\nis.\r\n\r\nWhatever else might be included on the function is forwarded as well.\r\nFor example return type, generics, etc.\r\n\r\nWorth noting that this is only for compatibility with other macros.\r\n`#[test]`s that take arguments will still fail to compile.\r\n\r\nA bit odd that [trybuild] tests don't fail `#[test]` functions with\r\narguments which is why the new tests are run with `t.pass(...)`. They do\r\nactually fail if part of a real crate.\r\n\r\n[trybuild]: https://crates.io/crates/trybuild",
          "timestamp": "2021-04-11T20:39:05+02:00",
          "tree_id": "c50965c227bfc40bef8ff305d46f85318e04397d",
          "url": "https://github.com/driftluo/tokio/commit/28d68798973fbfaab889d73c4da7cbc2d5a0e2f8"
        },
        "date": 1618197911561,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6306278,
            "range": "± 2752501",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5945661,
            "range": "± 1439110",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5857377,
            "range": "± 2806442",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 571,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 584,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 581,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 78626,
            "range": "± 7748",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1225,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 980431,
            "range": "± 152892",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 723427,
            "range": "± 71049",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vilscrolls@gmail.com",
            "name": "Aaron Taner",
            "username": "mapkts"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28",
          "message": "doc: fix invalid `#[doc(inline)]` warnings on latest nightly. (#3788)\n\nThis commit fixed issue #3787 by removing [doc(inline)] from\r\nmacro `cfg_macros` and added proper #[doc(inline)] attributes\r\nto `pub use` items inside `cfg_macros` calls.\r\n\r\nIt's probably not `cfg_macros`s responsibility to inlining public\r\nmacros, though it's conveninent to do so. Notice that in lib.rs:\r\n\r\ncfg_macros! {\r\n    /// Implementation detail of the `select!` macro. This macro is **not**\r\n    /// intended to be used as part of the public API and is permitted to\r\n    /// change.\r\n    #[doc(hidden)]\r\n    pub use tokio_macros::select_priv_declare_output_enum;\r\n\r\n    ...\r\n}\r\n\r\n`#[doc(hidden)]` and `#[doc(inline)]` are conflict with each other\r\nin the sense of correctness.\r\n\r\nFixes: #3787",
          "timestamp": "2021-05-18T01:28:17+09:00",
          "tree_id": "f36e7c741f022d48d4aed5da9c8b297dd57dfb45",
          "url": "https://github.com/driftluo/tokio/commit/ce9ca45c92b9bd4b449f94339fbe60a4ded9ab28"
        },
        "date": 1621400680591,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7294197,
            "range": "± 2467909",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6626408,
            "range": "± 1559234",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6787984,
            "range": "± 2343720",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 307,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 309,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 309,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 30752,
            "range": "± 11663",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 968,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1101192,
            "range": "± 249505",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 792218,
            "range": "± 9372",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}